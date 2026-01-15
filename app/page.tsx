export default function Dashboard() {
  return (
    <section className="space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard Gerai
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Sistem pendataan operasional gerai
        </p>
      </div>

      {/* GRID CARD */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Barang" desc="Barang masuk & terpakai" />
        <Card title="Produksi" desc="Masak nasi & bahan" />
        <Card title="Ayam" desc="Stok ayam harian" />
        <Card title="Jadwal" desc="Shift & libur kasir" />
      </div>
    </section>
  )
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      rounded-lg p-4 shadow-sm
      hover:shadow-md transition
    ">
      <h2 className="font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {desc}
      </p>
    </div>
  )
}
