import { ElementType } from 'react';

import getStore from '.';
import * as actions from './actions';
import { LinkParams, ImageState } from './types';

export function addUserMessage(chatId: string, text: string, id?: string) {
  getStore(chatId).dispatch(actions.addUserMessage(text, id));
}

export function addResponseMessage(chatId: string, text: string, id?: string) {
  getStore(chatId).dispatch(actions.addResponseMessage(text, id));
}

export function addLinkSnippet(chatId: string, link: LinkParams, id?: string) {
  getStore(chatId).dispatch(actions.addLinkSnippet(link, id));
}

export function toggleMsgLoader(chatId: string) {
  getStore(chatId).dispatch(actions.toggleMsgLoader());
}

export function renderCustomComponent(chatId: string, component: ElementType, props: any, showAvatar = false, id?: string) {
  getStore(chatId).dispatch(actions.renderCustomComponent(component, props, showAvatar, id));
}

export function toggleWidget(chatId: string) {
  getStore(chatId).dispatch(actions.toggleChat());
}

export function toggleInputDisabled(chatId: string) {
  getStore(chatId).dispatch(actions.toggleInputDisabled());
}

export function dropMessages(chatId: string) {
  getStore(chatId).dispatch(actions.dropMessages());
}

export function isWidgetOpened(chatId: string): boolean {
  return getStore(chatId).getState().behavior.showChat;
}

export function setQuickButtons(chatId: string, buttons: Array<{ label: string, value: string | number }>) {
  getStore(chatId).dispatch(actions.setQuickButtons(buttons));
}

export function deleteMessages(chatId: string, count: number, id?: string) {
  getStore(chatId).dispatch(actions.deleteMessages(count, id));
}

export function markAllAsRead(chatId: string) {
  getStore(chatId).dispatch(actions.markAllMessagesRead());
}

export function setBadgeCount(chatId: string, count: number) {
  getStore(chatId).dispatch(actions.setBadgeCount(count));
}

export function openFullscreenPreview(chatId: string, payload: ImageState) {
  getStore(chatId).dispatch(actions.openFullscreenPreview(payload));
}

export function closeFullscreenPreview(chatId: string) {
  getStore(chatId).dispatch(actions.closeFullscreenPreview());
}
