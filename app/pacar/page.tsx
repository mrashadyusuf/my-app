export default function PacarPage() {
  return (
    <section className="min-h-screen bg-pink-50 px-8 py-16">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          Pacar
        </h1>

         <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-pink-200 overflow-hidden">
         <img
         src="gita.png"
         alt="Foto Gita Ariska"
         className="w-full h-full object-cover"
         />
         
         </div>
        <div className="text-left space-y-3 text-gray-700">
          <p><span className="font-bold">Nama:</span> Gita Ariska</p>
          <p><span className="font-bold">Agama:</span> Islam</p>
          <p><span className="font-bold">Tinggi:</span> 163 cm</p>
          <p><span className="font-bold">Berat:</span> 60 kg</p>
        </div>
      </div>
    </section>
  );
}