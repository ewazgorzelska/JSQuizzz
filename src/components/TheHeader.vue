<template>
  <header>
    <p>JS Quizzz</p>
  </header>
</template>

<style scoped>
header {
  height: 15vh;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--surface-b);
}

p {
  font-size: 4rem;
  font-weight: 700;
}
.description {
  margin-left: 3vw;
  font-size: 2.5rem;
  display: flex;
  gap: 3vw;
}
</style>
