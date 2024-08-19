function UserName({ params }: { params: {id: string} }) { 

    return (
        
        <>
            <h1>Nombre de usuario: { params.id}</h1>
        </>
    )
}

export default UserName