<script setup lang="ts">

import Notifications from '@/components/Notifications/Notifications.vue'
import Notification from '@/components/Notifications/Notification.vue'
import { notifications } from './notifications'
import { useStore } from 'vuex'

let store = useStore()

let notificationsCount = store.getters['getCountUnread']

</script>

<template>
  <main class="notifier-wrapper">
    <!-- top side -->
    <section class="notifier-top-side">
      <div class="notifier-top-side__title">
        <h1>
          Notifications
            <span>
            {{ notificationsCount }}
          </span>
        </h1>
      </div>
      <div class="notifier-top-side__buttons">
        <button class="notifier-top-side__button">Mark all as read</button>
      </div>
    </section>

    <!-- notifications -->
    <Notifications>
      <div
        class="notifier-notifications__wrapper"
        v-for="(notification, index) in notifications"
        :key="notification.id"
      >
        <Notification :notification="notification" :index="index" />
      </div>
    </Notifications>
  </main>
  Notifications 3 Mark all as read Mark Webber reacted to your recent post My
  first tournament today! 1m ago Angela Gray followed you 5m ago Jacob Thompson
  has joined your group Chess Club 1 day ago Rizky Hasanuddin sent you a private
  message 5 days ago Hello, thanks for setting up the Chess Club. I've been a
  member for a few weeks now and I'm already having lots of fun and improving my
  game. Kimberly Smith commented on your picture 1 week ago Nathan Peterson
  reacted to your recent post 5 end-game strategies to increase your win rate 2
  weeks ago Anna Kim left the group Chess Club 2 weeks ago
</template>

<style scoped></style>
