<script setup>
defineProps({
  goto: { type: String, default: null },
});
</script>

<template>
  <button
    type="button"
    class="scroll-down-btn"
    :data-goto="goto"
    title="Scroll down"
    aria-label="Scroll down"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" viewBox="0 0 50 80">
      <path
        class="first-path"
        fill="#FFFFFF"
        d="M24.752,79.182c-0.397,0-0.752-0.154-1.06-0.463L2.207,57.234c-0.306-0.305-0.458-0.656-0.458-1.057
        s0.152-0.752,0.458-1.059l2.305-2.305c0.309-0.309,0.663-0.461,1.06-0.461c0.398,0,0.752,0.152,1.061,0.461l18.119,18.119
        l18.122-18.119c0.306-0.309,0.657-0.461,1.057-0.461c0.402,0,0.753,0.152,1.059,0.461l2.306,2.305
        c0.308,0.307,0.461,0.658,0.461,1.059s-0.153,0.752-0.461,1.057L25.813,78.719C25.504,79.027,25.15,79.182,24.752,79.182z"
      ></path>
      <path
        class="second-path"
        fill="#FFFFFF"
        d="M24.752,58.25c-0.397,0-0.752-0.154-1.06-0.463L2.207,36.303c-0.306-0.304-0.458-0.655-0.458-1.057
        c0-0.4,0.152-0.752,0.458-1.058l2.305-2.305c0.309-0.308,0.663-0.461,1.06-0.461c0.398,0,0.752,0.153,1.061,0.461l18.119,18.12
        l18.122-18.12c0.306-0.308,0.657-0.461,1.057-0.461c0.402,0,0.753,0.153,1.059,0.461l2.306,2.305
        c0.308,0.306,0.461,0.657,0.461,1.058c0,0.401-0.153,0.753-0.461,1.057L25.813,57.787C25.504,58.096,25.15,58.25,24.752,58.25z"
      ></path>
    </svg>
  </button>
</template>

<style scoped lang="scss">
@use '@helpers/' as *;

.scroll-down-btn {
  position: absolute;
  z-index: 5;
  bottom: 5vh;
  left: 50%;
  width: 44px;
  height: 60px;
  text-align: center;
  transform: translateX(-50%);

  @media (max-width: em(500)) {
    bottom: 8vh;
  }

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;

    path {
      &.first-path {
        animation: scrollanim 1s ease-in-out infinite;
        animation-delay: 0.8s;
      }

      &.second-path {
        animation: scrollanim2 1s ease-in-out infinite;
      }
    }
  }
}

@keyframes scrollanim {
  0% {
    opacity: 0;
    transform: translate(0, -40px);
  }

  60% {
    opacity: 0.8;
    transform: translate(0, 0);
  }
}

@keyframes scrollanim2 {
  0% {
    opacity: 0;
    transform: translate(0, -40px);
  }

  60% {
    opacity: 0.6;
    transform: translate(0, 0);
  }
}
</style>
