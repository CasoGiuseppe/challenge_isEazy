import { describe, it, expect, beforeEach } from 'vitest';
import { createApp } from 'vue';
import pinia from '@shared/stores/pinia';
import { setActivePinia } from 'pinia';
import { userStore, type UserStore } from '../index';
import type { IUserState } from '@/server/types/users';

const $app = createApp({});
let $useUserStore: UserStore;
const $user = {id: 'id', completeName: 'name surname', email: 'email', picture: 'picture'}

describe('Message Store store tests', () => {
  beforeEach(() => {
    $app.use(pinia);
    setActivePinia(pinia);
    $useUserStore = userStore();
  });

  it('Should init state be undefined', () => {
    expect($useUserStore.state).toBeUndefined();
  });

  it('Should state have correct lenght', () => {
    $useUserStore.saveUser($user);
    const $giveUser: IUserState | undefined = $useUserStore.getUser
    if(!$giveUser) return;
    expect(Object.keys($giveUser)).toHaveLength(Object.keys($user).length);
  });

  it('Should state have correct saved content', () => {
    $useUserStore.saveUser($user);
    const $giveUser = $useUserStore.getUser
    if(!$giveUser) return;
    expect($giveUser).toMatchObject($user);
  });

});
