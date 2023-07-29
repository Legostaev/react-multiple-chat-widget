import { ElementType } from 'react';

import getStore from '.';
import * as actions from './actions';
import Constants from './constants';
import { LinkParams, ImageState } from './types';

export function getChatId(chatId: string | null) {
  return chatId ? chatId : Constants.CHAT_ID;
}

export function addUserMessage(chatId: string, text: string, id?: string) {
  getStore(getChatId(chatId)).dispatch(actions.addUserMessage(text, id));
}

export function addResponseMessage(chatId: string, text: string, id?: string) {
  getStore(getChatId(chatId)).dispatch(actions.addResponseMessage(text, id));
}

export function addLinkSnippet(chatId: string, link: LinkParams, id?: string) {
  getStore(getChatId(chatId)).dispatch(actions.addLinkSnippet(link, id));
}

export function toggleMsgLoader(chatId: string) {
  getStore(getChatId(chatId)).dispatch(actions.toggleMsgLoader());
}

export function renderCustomComponent(chatId: string, component: ElementType, props: any, showAvatar = false, id?: string) {
  getStore(getChatId(chatId)).dispatch(actions.renderCustomComponent(component, props, showAvatar, id));
}

export function toggleWidget(chatId: string) {
  getStore(getChatId(chatId)).dispatch(actions.toggleChat());
}

export function toggleInputDisabled(chatId: string) {
  getStore(getChatId(chatId)).dispatch(actions.toggleInputDisabled());
}

export function dropMessages(chatId: string) {
  getStore(getChatId(chatId)).dispatch(actions.dropMessages());
}

export function isWidgetOpened(chatId: string): boolean {
  return getStore(getChatId(chatId)).getState().behavior.showChat;
}

export function setQuickButtons(chatId: string, buttons: Array<{ label: string, value: string | number }>) {
  getStore(getChatId(chatId)).dispatch(actions.setQuickButtons(buttons));
}

export function deleteMessages(chatId: string, count: number, id?: string) {
  getStore(getChatId(chatId)).dispatch(actions.deleteMessages(count, id));
}

export function markAllAsRead(chatId: string) {
  getStore(getChatId(chatId)).dispatch(actions.markAllMessagesRead());
}

export function setBadgeCount(chatId: string, count: number) {
  getStore(getChatId(chatId)).dispatch(actions.setBadgeCount(count));
}

export function openFullscreenPreview(chatId: string, payload: ImageState) {
  getStore(getChatId(chatId)).dispatch(actions.openFullscreenPreview(payload));
}

export function closeFullscreenPreview(chatId: string) {
  getStore(getChatId(chatId)).dispatch(actions.closeFullscreenPreview());
}
