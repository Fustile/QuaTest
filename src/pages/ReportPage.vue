<template>
  <q-page class="q-pa-md">
    <q-form @submit.prevent="generateReport">
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="text-h6">Параметры отчета</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="name" label="Имя" outlined dense />
          <q-input v-model="lastname" label="Фамилия" outlined dense class="q-mt-md" />
          <q-input v-model="secondname" label="Отчество" outlined dense class="q-mt-md" />
          <q-date v-model="dateRange" range label="Интервал дат" dense outlined class="q-mt-md" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Сформировать отчет" color="primary" type="submit" />
        </q-card-actions>
      </q-card>
    </q-form>
    <q-table dense flat :rows="reportData" :columns="columns" row-key="id">
      <template v-slot:body-cell-date="props">
        {{ new Date(props.row.date).toLocaleDateString() }}
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface ReportRow {
  id: number
  name: string
  lastname: string
  secondname: string
  date: string
}

interface TableColumn {
  name: string
  label: string
  field: string
}

const name = ref<string>('')
const lastname = ref<string>('')
const secondname = ref<string>('')
const dateRange = ref<[string, string] | null>(null)

const reportData = ref<ReportRow[]>([])
const columns = ref<TableColumn[]>([
  { name: 'id', label: 'ID', field: 'id' },
  { name: 'name', label: 'Имя', field: 'name' },
  { name: 'lastname', label: 'Фамилия', field: 'lastname' },
  { name: 'secondname', label: 'Отчество', field: 'secondname' },
  { name: 'range', label: 'Дата', field: 'date' },
])

const generateReport = (): void => {
  const date = dateRange.value ? Object.values(dateRange.value).join(' ') : ' '
  reportData.value.push({
    id: Number(new Date()),
    name: name.value,
    lastname: lastname.value,
    secondname: secondname.value,
    date,
  })
}
</script>
