<template>
<span class="badge" :class="type">
    {{ text }}
</span>
</template>

<script>
export default {
    props: ['type', 'title'],
    computed: {
        text() {
            return this.title.toUpperCase();
        }
    }
}
</script>

<style scoped>
.badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 3px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
}

.frontend {
    background-color: #3d008d;
    color: white;
}

.backend {
    background-color: #0e6f4d;
    color: white;
}

.career {
    background-color: #8d006e;
    color: white;
}
.allrounder {
    background-color: #0d5464;
    color: white;
}
</style>
