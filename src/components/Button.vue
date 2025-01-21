<template>
  <button 
    @click="onClick" 
    :style="{ background: color, borderColor: borderColor }" 
    :class="['btn', { 'btn-disabled': disabled }]"
    :disabled="disabled"
    :aria-label="ariaLabel"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#007bff'
    },
    borderColor: {
      type: String,
      default: 'transparent'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit('btn-click')
      }
    },
  },
}
</script>

<style scoped>
.btn {
  display: inline-block;
  color: white;
  border: 2px solid;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.btn:hover {
  opacity: 0.8;
}

.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Adicionar um estado focus para melhor acessibilidade */
.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}
</style>
