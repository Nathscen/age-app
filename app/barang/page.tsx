'use client'

import { useEffect, useState } from 'react'
import { getData, saveData } from '@/lib/storage'

type Barang = {
  tanggal: string
  nama: string
  jenis: 'masuk' | 'pakai'
  jumlah: number
  satuan: string
}

export default function BarangPage() {
  const [list, setList] = useState<Barang[]>([])
  const [form, setForm] = useState<Barang>({
    tanggal: new Date().toISOString().slice(0, 10),
    nama: '',
    jenis: 'masuk',
    jumlah: 0,
    satuan: 'kg',
  })

  // ambil data awal
  useEffect(() => {
    const data = getData<Barang>('barang')
  
    setTimeout(() => {
      setList(data)
    }, 0)
  }, [])
  

  const handleSubmit = () => {
    if (!form.nama || form.jumlah <= 0) {
      alert('Data belum lengkap')
      return
    }

    const newData = [...list, form]
    setList(newData)
    saveData('barang', newData)

    // reset sebagian form
    setForm((prev) => ({
      ...prev,
      nama: '',
      jumlah: 0,
    }))
  }

  const today = new Date().toISOString().slice(0, 10)
  const todayList = list.filter((item) => item.tanggal === today)

  return (
    <main className="p-4 space-y-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        Barang Masuk & Terpakai
      </h1>

      {/* FORM INPUT */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded shadow space-y-3">
        <input
          type="date"
          className="w-full border p-2 rounded bg-transparent dark:text-white"
          value={form.tanggal}
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
        />

        <input
          type="text"
          placeholder="Nama barang (beras, samin, dll)"
          className="w-full border p-2 rounded bg-transparent dark:text-white"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
        />

        <select
          className="w-full border p-2 rounded bg-transparent dark:text-white"
          value={form.jenis}
          onChange={(e) =>
            setForm({ ...form, jenis: e.target.value as 'masuk' | 'pakai' })
          }
        >
          <option value="masuk">Barang Masuk</option>
          <option value="pakai">Barang Terpakai</option>
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Jumlah"
            className="flex-1 border p-2 rounded bg-transparent dark:text-white"
            value={form.jumlah}
            onChange={(e) =>
              setForm({ ...form, jumlah: Number(e.target.value) })
            }
          />

          <select
            className="border p-2 rounded bg-transparent dark:text-white"
            value={form.satuan}
            onChange={(e) =>
              setForm({ ...form, satuan: e.target.value })
            }
          >
            <option value="kg">kg</option>
            <option value="pcs">pcs</option>
            <option value="liter">liter</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-semibold"
        >
          SIMPAN
        </button>
      </div>

      {/* LIST DATA */}
      <div className="bg-white dark:bg-zinc-900 p-4 rounded shadow">
        <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">
          Riwayat Hari Ini
        </h2>

        {todayList.length === 0 && (
          <p className="text-gray-500 text-sm">Belum ada data</p>
        )}

        <ul className="space-y-2 text-sm">
          {todayList.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between p-2 rounded ${
                item.jenis === 'masuk'
                  ? 'bg-green-100 text-green-900'
                  : 'bg-red-100 text-red-900'
              }`}
            >
              <span>
                {item.nama} ({item.jenis})
              </span>
              <span>
                {item.jumlah} {item.satuan}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
