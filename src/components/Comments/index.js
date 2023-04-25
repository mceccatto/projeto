function Comments({ usuario, avatar, data, mensagem }) {
    return (
        <div className="Comments">
            <div className="d-flex text-body-secondary pt-3">
                <img src={avatar} height={50}></img>
                <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">{usuario} em {data}</strong>
                    {mensagem}
                </p>
            </div>
        </div>
    );
}

export default Comments;