import { describe, it, expect, beforeEach } from 'vitest';
import { createApp } from 'vue';
import pinia from '@shared/stores/pinia';
import { setActivePinia } from 'pinia';
import { messagesStore, type MessageStore } from '../index';
import type { IMessagesStoreState } from '../definitions';

const $app = createApp({});
let $useMessagesStore: MessageStore;
const $message = {id: 'id', user: 'user', item: { text: 'text', date: new Date()}, type: 'type', picture: 'picture'}

describe('Message Store store tests', () => {
  beforeEach(() => {
    $app.use(pinia);
    setActivePinia(pinia);
    $useMessagesStore = messagesStore();
  });

  it('Should init state have lenght === 0', () => {
    expect($useMessagesStore.state).toHaveLength(0);
  });

  it('Should state have lenght === 1', () => {
    $useMessagesStore.saveMessage($message)
    const $givenMessages = $useMessagesStore.getMessages
    expect($givenMessages).toHaveLength(1);
  });

  it('Should state have provide user key', () => {
    $useMessagesStore.saveMessage($message)
    const $givenMessages: IMessagesStoreState[] | undefined = $useMessagesStore.getMessages
    if(!$givenMessages) return;
    expect($givenMessages[0]).toHaveProperty('user', 'user');
  });

  it('Should state have correct saved content', () => {
    $useMessagesStore.saveMessage($message)
    const $givenMessages: IMessagesStoreState[] | undefined = $useMessagesStore.getMessages
    if(!$givenMessages) return;
    expect($givenMessages[0]).toMatchObject($message);
  });
});
