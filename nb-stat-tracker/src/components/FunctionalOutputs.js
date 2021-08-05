export default function FunctionalOutputs() {
  return(
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-center h-full">
        {/* NBO */}
        <div className="w-full">
          <div>
            <label htmlFor="wContract" className="flex justify-start">NBO</label>
            <p className="wContract border-2 border-black rounded-md text-center mb-2">NBO</p>
          </div>
        </div>
        {/* Payout */}
        <div className="w-full">
          <div>
            <label htmlFor="payout" className="flex justify-start">Payouts</label>
            <p className="wPayout border-2 border-black rounded-md text-center mb-2">Payout</p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="update" className="flex justify-start">Updates</label>
            <p className="wUpdates border-2 border-black rounded-md text-center mb-2">Update</p>
          </div>
        </div>
        {/* Calls */}
        <div className="w-full">
          <div>
            <label htmlFor="calls" className="flex justify-start">Calls</label>
            <p className="wCalls border-2 border-black rounded-md text-center mb-2">Calls</p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <label htmlFor="total" className="flex justify-start">Total Activities</label>
            <p className="total border-2 border-black rounded-md text-center mb-2">Total</p>
          </div>
        </div>
      </div>
    </div>
  )
}