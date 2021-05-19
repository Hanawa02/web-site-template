<template>
  <div>
    <div class="flex text-base items-center">
      <font-awesome-icon v-if="icon" :icon="icon" class="mx-2 text-base" />
      <div
        class="flex py-1 cursor-pointer items-center"
        :class="{ 'border border-primary-light': applyBorder }"
        @click="toggleOptions()"
      >
        <div v-if="selectedItem">
          {{ $t(selectedItem.description) }}
        </div>
        <div v-if="!selectedItem">
          {{ $t(placeholder) }}
        </div>

        <font-awesome-icon
          v-if="icon"
          :icon="selectIcon"
          class="px-1 select-icon mx-1"
        />
      </div>
    </div>
    <div v-if="showOptions" class="h-0">
      <div
        v-if="showOptions"
        class="
          relative
          z-50
          px-2
          shadow-lg
          rounded-sm
          font-medium
          py-1
          max-h-64
          text-primary
          bg-primary-contrast bg-opacity-90
        "
      >
        <div
          v-for="(option, index) of options"
          :key="option.description"
          class="py-1 cursor-pointer"
          :class="{
            'border-b border-primary-light ': index !== options.length - 1
          }"
          @click="setOption(option)"
        >
          {{ $t(option.description) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SelectItem } from '~/models/UI/select-item.model'

const DEFAULT_MILISECONDS_SELECT_OPTIONS_VISIBLE = 1000000

export default Vue.extend({
  name: 'AppSelect',
  props: {
    icon: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'components.UI.AppSelect.genericPlaceholder'
    },
    applyBorder: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true,
      validator: function (value: SelectItem[]) {
        return value && value.length > 1
      }
    },
    initialValue: {
      required: false
    }
  },
  data() {
    return {
      selectedItemValue: {},
      selectIcon: 'sort',
      showOptions: false
    }
  },
  methods: {
    toggleOptions(): void {
      this.showOptions = !this.showOptions

      if (this.showOptions) {
        setTimeout(
          () => this.hideOptions(),
          DEFAULT_MILISECONDS_SELECT_OPTIONS_VISIBLE
        )
      }
    },
    hideOptions(): void {
      this.showOptions = false
    },

    setOption(option: SelectItem): void {
      this.selectedItemValue = option.value
      this.$emit('change', this.selectedItemValue)
      this.hideOptions()
    }
  },
  computed: {
    selectedItem(): SelectItem | undefined {
      return (
        (this.options as SelectItem[])?.find(
          (item) => item.value === this.selectedItemValue
        ) ||
        (this.options as SelectItem[])?.find(
          (item) => item.value === this.initialValue
        )
      )
    }
  }
})
</script>

<style scoped>
.select-icon {
  width: 1em;
  height: 1em;
}
</style>
