export default function CollisionHandler(entidade1, entidade2, callback, contexto){
    if (entidade1.posicao.x + entidade1.largura >= entidade2.posicao.x &&
        entidade1.posicao.x <= entidade2.posicao.x + entidade2.largura &&
        entidade1.posicao.y + entidade1.altura >= entidade2.posicao.y &&
        entidade1.posicao.y <= entidade2.posicao.y + entidade2.altura) {
        callback.call(contexto)
    }else{
        entidade1.estadoOriginal();
        entidade2.estadoOriginal();
    }
}