<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { NotificationInterface } from '@/interfaces/NotificationInterface'

const props = defineProps<{
  notification: NotificationInterface
  index: number
}>()

let { actor, message }: NotificationInterface = ref(props.notification).value
</script>

<template>
  <!-- notification -->
  <article
    class="notifier-notifications__item"
    :alert-status="notification.isRead ? 'read' : 'unread'"
  >
    <!-- actor avatar -->
    <div class="notifier-notifications__actor-avatar">
      <img
        :src="actor.avatar"
        alt="actor avar"
        class="notifier-notifications__avatar-img"
      />
    </div>

    <!-- notification content -->
    <div class="notifier-notifications__content">
      <div class="notifier-notifications__content-header inline">
        <div class="notifier-notifications__actor-name inline">
          <span>{{ actor.name }}</span>
        </div>
      </div>
      <div class="notifier-notifications__content-body inline">
        <div class="notifier-notifications__content-body-text">
          <span>{{ message.content }} </span>
          <i
            class="unread-icon"
            v-if="!notification.isRead && !message.link"
          ></i>
          <span v-if="message.link">
            <a :href="message.link.url">
              <img v-if="message.link.isImage" :src="message.link.text" />
              <span v-else> &nbsp;{{ message.link.text }} </span>
              <i class="unread-icon" v-if="!notification.isRead"></i>
            </a>
          </span>
        </div>
      </div>

      <!-- the time when the notification is received-->
      <div class="notifier-notifications__content-footer">
        <div class="notifier-notifications__time">
          <span>{{ notification.time }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
