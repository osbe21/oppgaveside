<script setup>
import { ref } from 'vue';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const db = getFirestore();
const auth = getAuth();

const myDocuments = ref([]);

const errorMessage = ref('');

onAuthStateChanged(auth, user => {
    if (!user) return;

    const myDocsQuery = query(collection(db, 'documents'), where('ownerID', '==', user.uid));
    
    getDocs(myDocsQuery)
        .then(querySnapshot => myDocuments.value = querySnapshot.docs.map(doc => doc.data()))
        .catch(error => errorMessage.value = error.message)
});

</script>

<template>
    <section class="w-2/3 h-screen m-auto shadow-md">
        <h1 class="m-5 text-3xl font-semibold capitalize">Mine tekster</h1>
        <p v-if="!myDocuments.length" class="m-5 text-lg">Ingen tekster funnet...</p>
        <div v-else>
            <div v-for="doc in myDocuments" class="p-5 border shadow-md">
                <h3 class="mb-2 text-xl font-semibold">
                    {{ doc.title }}
                    <span class="m-5 px-2 py-1 rounded bg-slate-200">
                        {{ doc.genre }} ({{ doc.subject }})
                    </span>
                    <span>
                        <button class="p-1 rounded text-sm font-body text-white bg-red-500">Slett</button>
                    </span>
                </h3>
                <p>{{ doc.content }}</p>
            </div>
        </div>
    </section>
</template>