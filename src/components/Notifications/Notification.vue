<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { NotificationInterface } from '@/interfaces/NotificationInterface'
import { NotificationTypeEnum } from '@/enums/NotificationTypeEnum';

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
    <div class="notifier-notifications__content" :class="{'flex justify-between': notification.type === NotificationTypeEnum.COMMENT}">
      <div class="notifier-notifications__content-actor flex items-center">
        <img
          :src="`/${actor.avatar}`"
          alt="actor avar"
          class="notifier-notifications__avatar-img"
        />
        <span>
          <b>{{ actor.name }}</b>&nbsp;
          {{ message.content }}
        </span>
      </div>
      <div class="notifier-notifications__content-body" v-if="message.link">
        <a :href="message.link.url">
          <img :src="message.link.text" alt="reaction image" v-if="message.link.isImage">
        </a>
        <div class="content" v-if="notification.type === NotificationTypeEnum.DM">
          <a :href="message.link.url">
            {{ message.link.text }}
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>
