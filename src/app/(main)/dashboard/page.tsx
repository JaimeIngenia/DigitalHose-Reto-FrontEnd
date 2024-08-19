import Link from "next/link"

function Dashboard() {
    return (
        
        <>
            <main className="w-full border-2 border-red-500">
                <h1 >Dashboard</h1>
                <Link href="/" >Home</Link>
            </main>
        </>
    )

}

export default Dashboard