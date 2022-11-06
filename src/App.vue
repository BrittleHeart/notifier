<script setup lang="ts">

import Notifications from '@/components/Notifications/Notifications.vue'
import Notification from '@/components/Notifications/Notification.vue'
import { notifications } from './notifications'
import { useStore } from 'vuex'

let store = useStore()

let notificationsCount = store.getters['getCountUnread']

</script>

<template>
  <main class="notifier-wrapper mobile:w-full desktop:w-6/12 desktop:mx-auto desktop:mt-10 bg-neutral-white rounded-lg p-5">
    <!-- top side -->
    <section class="notifier-top-side flex justify-between items-center">
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
</template>

<style scoped></style>
