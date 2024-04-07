<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

const router = useRouter();
const db = getFirestore();
const auth = getAuth();

const subject = ref('');
const genre = ref('');
const title = ref('');
const content = ref('');

const errorMessage = ref('');

const upload = () => {
    addDoc(collection(db, 'documents'), {
        approved: false,
        ownerID: auth.currentUser.uid,
        timestamp: Timestamp.fromDate(new Date()),
        subject: subject.value,
        genre: genre.value,
        title: title.value,
        content: content.value
    })
    .then(docReference => router.push('/'))
    .catch(error => errorMessage.value = error.message);
}

</script>

<template>
    <section class="w-2/3 h-screen m-auto shadow-md">
        <p v-if="errorMessage.length">{{ errorMessage }}</p>
        <h1 class="text-5xl capitalize">Last opp en tekst</h1>
        <form @submit.prevent="upload">
            <input v-model="subject" placeholder="Fag" type="text" class="block border">
            <input v-model="genre" placeholder="Sjanger" type="text" class="block border">
            <input v-model="title" placeholder="Tittel" type="text" class="block border">
            <textarea v-model="content" placeholder="Innhold" cols="30" rows="10" class="block resize-none border"></textarea>
            <button type="submit" class="p-2 border">Last Opp</button>
        </form>
    </section>
</template>
