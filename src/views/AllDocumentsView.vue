<script setup>
import { ref } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Layout from '@/components/Layout.vue';

const db = getFirestore();

const documents = ref([]);

const errorMessage = ref('');

getDocs(collection(db, 'documents'))
    .then(docSnapshot => documents.value = docSnapshot.docs.map(doc => doc.data()))
    .catch(error => errorMessage.value = error.message);

</script>

<template>
    <Layout>
        <section class="w-2/3 h-screen m-auto shadow-md">
            <h1 class="m-5 text-5xl capitalize">Alle tekster</h1>
            <p v-if="!documents.length" class="m-5 text-lg">Ingen tekster funnet...</p>
            <div v-else>
                <div v-for="doc in documents" class="p-5 border shadow-md">
                    <h3 class="mb-2 text-xl font-semibold">
                        {{ doc.title }}
                        <span class="m-5 px-2 py-1 rounded bg-slate-200">
                            {{ doc.genre }} ({{ doc.subject }})
                        </span>
                    </h3>
                    <p>{{ doc.content }}</p>
                </div>
            </div>
        </section>
    </Layout>
</template>