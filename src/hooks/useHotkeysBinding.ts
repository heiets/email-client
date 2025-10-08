/**
 * Available shortcuts:
 * - 'r' - Navigate to Read folder
 * - 'd' - Navigate to Deleted folder
 * - 'i' - Navigate to Inbox folder
 * - 'Escape' - Deselect current email
 * - 'u' - Mark selected email as unread
 * - 'Delete' - Delete selected email
 */

import { useEffect, useRef } from "react";
import { fromEvent, Subject, merge } from "rxjs";
import {
  map,
  filter,
  distinctUntilChanged,
  debounceTime,
  tap,
  takeUntil,
} from "rxjs/operators";
import { Folder } from "../types";

interface UseHotkeysBindingProps {
  setSelectedEmailId: (emailId: number | null) => void;
  setSelectedFolder: (folder: Folder) => void;
  markAsRead?: (emailId: number) => void;
  markAsUnread?: (emailId: number) => void;
  deleteEmail?: (emailId: number) => void;
  selectedEmailId?: number | null;
}

export const useHotkeysBinding = ({
  setSelectedEmailId,
  setSelectedFolder,
  markAsRead,
  markAsUnread,
  deleteEmail,
  selectedEmailId,
}: UseHotkeysBindingProps) => {
  const destroy$ = useRef(new Subject<void>());

  useEffect(() => {
    const keyDown$ = fromEvent<KeyboardEvent>(document, "keydown");

    // Prevent default behavior for our shortcuts
    const preventDefault$ = keyDown$.pipe(
      filter((event) => {
        const isOurShortcut =
          event.key === "Escape" ||
          event.key === "r" ||
          event.key === "d" ||
          event.key === "i" ||
          event.key === "u" ||
          event.key === "Delete";

        if (isOurShortcut) {
          event.preventDefault();
        }

        return isOurShortcut;
      }),
    );

    // Folder navigation shortcuts
    const folderShortcuts$ = preventDefault$.pipe(
      map((event) => event.key),
      filter((key) => ["r", "d", "i"].includes(key)),
      distinctUntilChanged(),
      debounceTime(100),
      tap((key) => {
        switch (key) {
          case "r":
            setSelectedFolder("read");
            break;
          case "d":
            setSelectedFolder("deleted");
            break;
          case "i":
            setSelectedFolder("inbox");
            break;
        }
      }),
    );

    // Email action shortcuts
    const emailActionShortcuts$ = preventDefault$.pipe(
      filter(() => selectedEmailId !== null && selectedEmailId !== undefined),
      map((event) => event.key),
      filter((key) => ["u", "Delete"].includes(key)),
      distinctUntilChanged(),
      debounceTime(100),
      tap((key) => {
        if (!selectedEmailId) return;

        switch (key) {
          case "u":
            markAsUnread?.(selectedEmailId);
            break;
          case "Delete":
            deleteEmail?.(selectedEmailId);
            break;
        }
      }),
    );

    // Escape key to deselect email
    const escapeShortcut$ = preventDefault$.pipe(
      filter((event) => event.key === "Escape"),
      distinctUntilChanged(),
      debounceTime(100),
      tap(() => setSelectedEmailId(null)),
    );

    // Combine all shortcuts
    const allShortcuts$ = merge(
      folderShortcuts$,
      emailActionShortcuts$,
      escapeShortcut$,
    );

    // Subscribe to all shortcuts
    const subscription = allShortcuts$
      .pipe(takeUntil(destroy$.current))
      .subscribe();

    return () => {
      destroy$.current.next();
      destroy$.current.complete();
      subscription.unsubscribe();
    };
  }, [
    setSelectedEmailId,
    setSelectedFolder,
    markAsRead,
    markAsUnread,
    deleteEmail,
    selectedEmailId,
  ]);
};
