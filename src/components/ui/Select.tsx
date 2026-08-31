'use client';

import { useEffect, useRef, useState } from 'react';
import { fieldSurface } from '@/components/ui/Field';

/**
 * Listbox replacing the native <select>, whose popup no browser lets an author style.
 * Its 1px value input is transparent, not hidden: display:none would bar `required` from firing.
 */

const PANEL_MAX_HEIGHT = 288;

type SelectProps = {
  id: string;
  name: string;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
  invalidMessage?: string;
  className?: string;
};

export function Select({
  id,
  name,
  options,
  placeholder,
  required = false,
  invalidMessage = 'Pick one so the reply lands with a number attached.',
  className = '',
}: SelectProps) {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [invalid, setInvalid] = useState(false);
  const [dropUp, setDropUp] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const typeahead = useRef({ query: '', at: 0 });

  const listId = `${id}-listbox`;
  const errorId = `${id}-error`;
  const optionId = (index: number) => `${id}-option-${index}`;
  const selectedIndex = options.indexOf(value);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.getElementById(`${id}-option-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [id, open, active]);

  function openPanel(index = selectedIndex >= 0 ? selectedIndex : 0) {
    const box = triggerRef.current?.getBoundingClientRect();
    if (box) {
      const below = window.innerHeight - box.bottom;
      setDropUp(below < PANEL_MAX_HEIGHT && box.top > below);
    }
    setActive(index);
    setOpen(true);
  }

  function commit(index: number) {
    const option = options[index];
    if (option === undefined) return;

    setValue(option);
    setActive(index);
    setInvalid(false);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    const { key } = event;

    if (key === 'Tab') {
      setOpen(false);
      return;
    }

    if (key === 'Escape') {
      if (open) {
        event.preventDefault();
        setOpen(false);
      }
      return;
    }

    if (!open) {
      if (key === 'ArrowDown' || key === 'ArrowUp' || key === 'Enter' || key === ' ') {
        event.preventDefault();
        openPanel();
        return;
      }
    } else {
      if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        commit(active);
        return;
      }
      if (key === 'ArrowDown') {
        event.preventDefault();
        setActive((index) => Math.min(index + 1, options.length - 1));
        return;
      }
      if (key === 'ArrowUp') {
        event.preventDefault();
        setActive((index) => Math.max(index - 1, 0));
        return;
      }
      if (key === 'Home') {
        event.preventDefault();
        setActive(0);
        return;
      }
      if (key === 'End') {
        event.preventDefault();
        setActive(options.length - 1);
        return;
      }
    }

    if (key.length === 1 && key !== ' ') {
      const now = Date.now();
      const query =
        (now - typeahead.current.at < 700 ? typeahead.current.query : '') + key.toLowerCase();
      typeahead.current = { query, at: now };

      const match = options.findIndex((option) => option.toLowerCase().startsWith(query));
      if (match === -1) return;

      event.preventDefault();
      if (open) setActive(match);
      else commit(match);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        id={id}
        role="combobox"
        aria-controls={listId}
        aria-expanded={open}
        aria-required={required || undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? errorId : undefined}
        aria-activedescendant={open ? optionId(active) : undefined}
        onClick={() => (open ? setOpen(false) : openPanel())}
        onKeyDown={handleKeyDown}
        className={`${fieldSurface} flex cursor-pointer items-center justify-between gap-3 text-left ${
          open || invalid ? 'border-blueprint' : ''
        } ${className}`}
      >
        <span className={value ? 'text-ink' : 'text-muted/80'}>{value || placeholder}</span>
        <svg
          viewBox="0 0 12 8"
          aria-hidden="true"
          className={`h-2 w-3 shrink-0 text-muted transition-transform duration-200 ease-sheet ${
            open ? 'rotate-180' : ''
          }`}
        >
          <path
            d="M1 1.5 6 6.5 11 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={placeholder}
          className={`absolute right-0 left-0 z-30 m-0 max-h-72 list-none overflow-y-auto overscroll-contain rounded-sheet border border-muted bg-surface p-0 shadow-sheet ${
            dropUp
              ? 'bottom-[calc(100%+6px)] motion-safe:animate-drop-up'
              : 'top-[calc(100%+6px)] motion-safe:animate-drop'
          }`}
        >
          {options.map((option, index) => {
            const isActive = index === active;
            const isSelected = index === selectedIndex;

            return (
              <li
                key={option}
                id={optionId(index)}
                role="option"
                aria-selected={isSelected}
                onClick={() => commit(index)}
                onMouseMove={() => setActive(index)}
                className={`flex cursor-pointer items-center gap-3 border-l-2 border-b border-b-rule px-3.5 py-2.5 font-sans text-card last:border-b-0 motion-safe:transition-tint ${
                  isActive
                    ? 'border-l-blueprint bg-blueprint/8 text-ink'
                    : 'border-l-transparent text-ink-soft'
                }`}
              >
                <span
                  className={`font-mono text-mxs tabular-nums ${
                    isActive ? 'text-blueprint' : 'text-muted'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1">{option}</span>
                {isSelected ? (
                  <svg viewBox="0 0 12 10" aria-hidden="true" className="h-2.5 w-3 text-blueprint">
                    <path
                      d="M1 5.2 4.4 8.6 11 1.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="square"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}

      <input
        type="text"
        name={name}
        value={value}
        required={required}
        onChange={() => undefined}
        onFocus={() => triggerRef.current?.focus()}
        onInvalid={(event) => {
          event.preventDefault();
          setInvalid(true);
        }}
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-3.5 h-px w-px opacity-0"
      />

      {invalid ? (
        <p id={errorId} role="alert" className="mt-1.5 font-mono text-mxs text-blueprint">
          {invalidMessage}
        </p>
      ) : null}
    </div>
  );
}
