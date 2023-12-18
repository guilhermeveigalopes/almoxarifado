const campos = document.querySelectorAll('.requisicao');

document.getElementById('btnGravar').addEventListener('click', function () {
    var inputs = document.getElementsByClassName('requisicao');
    var camposInvalidos = false;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.value.trim() === '') {
            input.style.backgroundColor = 'red';
            camposInvalidos = true;
        } else {
            input.style.backgroundColor = '';
        }
    }

    if (camposInvalidos) {
        alert('Existem campos obrigatórios não preenchidos.');
    } else {
        alert('Formulário enviado com sucesso!');
    }
});


function carregarCategorias() {
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML = "";

    const openfirst = document.createElement('option');
    openfirst.value = -1
    openfirst.text = "";
    selectCategoria.add(openfirst);

    categorias.forEach(function (categoria) {
        var option = document.createElement("option");
        option.value = categoria.idCategoria;
        option.text = categoria.Descricao;
        selectCategoria.add(option);

    });
}


function carregarMotivos() {
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML = "";

    const openfirst = document.createElement('option');
    openfirst.value = -1
    openfirst.text = "";
    selectMotivo.add(openfirst);
    const valorCategoria = document.getElementById('categoriaMotivo').value;
    const motivosFiltrados = motivos.filter((m) => m.idCategoria == valorCategoria)

    motivosFiltrados.forEach(function (motivo) {
        const option = document.createElement("option");
        option.value = motivo.idMotivo;
        option.text = motivo.Descricao;
        selectMotivo.add(option);

    });
}

document.getElementById('categoriaMotivo').addEventListener('change', function () {
    carregarMotivos();
});

document.getElementById('codigoProduto').addEventListener("keyup", function () {
    const codigoPesquisado = document.getElementById('codigoProduto').value;
    let produtosFiltrados = produtos.filter((p) => p.idProduto == codigoPesquisado);

    if (produtosFiltrados.length > 0) {
        document.getElementById('descricaoProduto').value = produtosFiltrados[0].Descricao;

    } else {
        document.getElementById('descricaoProduto').value = "";
    }
});

document.getElementById('idDepartamento').addEventListener("keyup", function () {
    const codigoPesquisadoDep = document.getElementById('idDepartamento').value;
    let departamentosFiltrados = departamentos.filter((p) => p.idDepartamento == codigoPesquisadoDep);


    if (departamentosFiltrados.length > 0) {
        document.getElementById('departamento').value = departamentosFiltrados[0].Descricao;

    } else {
        document.getElementById('departamento').value = "";
    }
});

document.getElementById('idFuncionario').addEventListener("keyup", function () {
    const codigoPesquisadoFunc = document.getElementById('idFuncionario').value;
    let funcionariosFiltrados = funcionarios.filter((p) => p.idFuncionario == codigoPesquisadoFunc);

    if (funcionariosFiltrados.length > 0) {
        document.getElementById('NomeFuncionario').value = funcionariosFiltrados[0].nomeFuncionarios;
        document.getElementById('cargo').value = funcionariosFiltrados[0].Cargo;

    } else {
        document.getElementById('NomeFuncionario').value = "";
        document.getElementById('cargo').value = "";
    }
});



function eventoClickPrioridadeHabilitarCor() {
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');;
    checkboxesPrioridade.forEach(function (checkbox) {
        checkbox.addEventListener('click', function () {
            const divPrioridade = document.getElementById("radioPrioridade");
            if (divPrioridade) {
                divPrioridade.classList.add('radioPrioridade');
                divPrioridade.classList.remove('radioPrioridadeDesabilitado');
            }
            if (document.getElementById('urgente')) {
                document.getElementById('urgente').classList.add('chkPrioridade');
                document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
            }
            if (document.getElementById('medio')) {
                document.getElementById('medio').classList.add('chkPrioridade');
                document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
            }
            if (document.getElementById('baixo')) {
                document.getElementById('baixo').classList.add('chkPrioridade');
                document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
            }
        });
    });
}
document.getElementById('btnGravar').addEventListener('click', function () {
    const elementosObrigatorios = document.querySelectorAll('.requisicao');

    let validadoCamposPreenhcidos = true;

    setTimeout(function () {
        validadoCamposPreenhcidos = true;
        if (validadoCamposPreenhcidos) {
            document.getElementById('modalSucesso').style.display = 'block';
        }
    }, 1000);

    elementosObrigatorios.forEach(function (item) {

        if (item.value == "" || item.value == -1) {
            item.style.backgroundColor = 'red';
            validadoCamposPreenhcidos = false;
        }
    })

    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue == false && chkMedioValue == false && chkBaixoValue == false) {
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
        validadoCamposPreenhcidos = false;
    }
});


document.getElementById('BtnInserirItens').addEventListener('click', function () {
    const tabelaItens = document.getElementById('tabelaItens');

    const campoProduto = document.getElementById('codigoProduto');
    const campoDescricaoProduto = document.getElementById('descricaoProduto');
    const campoQuantidade = document.getElementById('Quantidade');
    const totalRequisicao = document.getElementById('total');

    const linha = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    const tdDescricao = document.createElement('td');
    const tdQuantidade = document.createElement('td');
    const tdUnd = document.createElement('td');
    const tdPreco = document.createElement('td');
    const tdTotalLinha = document.createElement('td');
    const tdBtnRemover = document.createElement('td');

    const produtoPesquisado = produtos.find((p) => p.idProduto == campoProduto.value);

    if (produtoPesquisado) {
        tdCodigo.innerHTML = campoProduto.value;
        tdDescricao.innerHTML = campoDescricaoProduto.value;
        tdQuantidade.innerHTML = campoQuantidade.value;
        tdUnd.innerHTML = produtoPesquisado.Unidade || '';
        tdPreco.innerHTML = produtoPesquisado.Preco || 0;
        tdTotalLinha.innerHTML = campoQuantidade.value * produtoPesquisado.Preco || 0;

        linha.appendChild(tdCodigo);
        linha.appendChild(tdDescricao);
        linha.appendChild(tdQuantidade);
        linha.appendChild(tdUnd);
        linha.appendChild(tdPreco);
        linha.appendChild(tdTotalLinha);

        tabelaItens.appendChild(linha);
    } else {
        alert('Produto não encontrado.');
    }

    var total = parseFloat(campoQuantidade.value * produtoPesquisado.Preco);
    totalRequisicao.value = total;

    tdBtnRemover.appendChild(criarBtnRemover(tabelaItens, linha));
    linha.appendChild(tdBtnRemover);
    tabelaItens.appendChild(linha);



});


function criarBtnRemover(tabela, objLinha, numeroLinha) {
    const btnRemoverItem = document.createElement('div');
    btnRemoverItem.className = "BtnRemover";
    btnRemoverItem.id = 'BtnRemover' + numeroLinha;
    btnRemoverItem.innerHTML = '<span>Remover</span>';

    btnRemoverItem.addEventListener('click', function () {
        if (objLinha && tabelaItens.contains(objLinha)) {
            tabelaItens.removeChild(objLinha);
        }

        const totalRequisicao = document.getElementById('total');
        const colunas = objLinha.getElementsByTagName('td');
        let valorLinha = colunas[5].innerText;

        totalRequisicao.value = parseFloat(totalRequisicao.value - parseFloat(valorLinha));

    });
    return btnRemoverItem;
}



function adicionarCorAoFocarInput() {

    const listInput = document.querySelectorAll("input[type=text]");
    listInput.forEach(function (item) {
        item.addEventListener('focus', function () {
            item.style.backgroundColor = "#7fffd4";
        });

        item.addEventListener('blur', function () {
            item.style.backgroundColor = "white";
        });

    })

};

function adicionarRegraCamposSomenteNumeros() {
    const elementosAceitaSoNumeros = document.querySelectorAll('[data-only-number="true"]');
    elementosAceitaSoNumeros.forEach(function (item) {
        item.addEventListener('keypress', function (e) {

            if (e.keCode < 48 || e.keyCode > 59) {
                e.preventDefault();
            };
        });
    })
}




adicionarCorAoFocarInput()
carregarCategorias();
carregarMotivos();
eventoClickPrioridadeHabilitarCor();
adicionarRegraCamposSomenteNumeros();
criarBtnRemover();


