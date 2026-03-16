export type BookmarkType = "glyph" | "word" | "pharaoh";

export interface Bookmark {
  type: BookmarkType;
  id: string;
  label: string;
  addedAt: number;
}

const STORAGE_KEY = "pharalex-bookmarks";

export function getBookmarks(): Bookmark[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getBookmarksByType(type: BookmarkType): Bookmark[] {
  return getBookmarks().filter((b) => b.type === type);
}

export function isBookmarked(type: BookmarkType, id: string): boolean {
  return getBookmarks().some((b) => b.type === type && b.id === id);
}

export function addBookmark(type: BookmarkType, id: string, label: string): Bookmark[] {
  const bookmarks = getBookmarks();
  if (bookmarks.some((b) => b.type === type && b.id === id)) return bookmarks;
  const updated = [...bookmarks, { type, id, label, addedAt: Date.now() }];
  saveBookmarks(updated);
  return updated;
}

export function removeBookmark(type: BookmarkType, id: string): Bookmark[] {
  const updated = getBookmarks().filter((b) => !(b.type === type && b.id === id));
  saveBookmarks(updated);
  return updated;
}

export function toggleBookmark(type: BookmarkType, id: string, label: string): { bookmarks: Bookmark[]; added: boolean } {
  if (isBookmarked(type, id)) {
    return { bookmarks: removeBookmark(type, id), added: false };
  }
  return { bookmarks: addBookmark(type, id, label), added: true };
}

export function clearBookmarks(): void {
  saveBookmarks([]);
}

function saveBookmarks(bookmarks: Bookmark[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  } catch {
    // localStorage full or unavailable — ignore
  }
}
