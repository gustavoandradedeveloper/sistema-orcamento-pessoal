class Despesa {
    constructor(ano,mes,dia,tipo,descricao,valor){
        this.ano        = ano;
        this.mes        = mes;
        this.dia        = dia;
        this.tipo       = tipo;
        this.descricao  = descricao;
        this.valor      = valor;
    }
}


function cadastrarDespesa(){
    let ano         = document.getElementById('ano').value ;
    let mes         = document.getElementById('mes').value ;
    let dia         = document.getElementById('dia').value ;
    let tipo        = document.getElementById('tipo').value ;
    let descricao   = document.getElementById('descricao').value ;
    let valor       = document.getElementById('valor').value ;

    
    let objDespesa = new Despesa(
            ano,
            mes,
            dia,
            tipo,
            descricao,
            valor
        );
    
    salvar(objDespesa);

}

function salvar(objDespesa){
    localStorage.setItem('despesa', JSON.stringify(objDespesa))
}