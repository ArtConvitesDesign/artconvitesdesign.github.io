import React from "react";
import { Container } from "react-bootstrap";

export const AdicionarCard = (props) => {
    const container = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' };
    const borda = { borderTop: '1px solid #f2f2f2' };
    const {add,form,onChange,onChangeFile} = props;
    
    return (
        <Container>
            <div style={container}>
                <div>
                    <div style={container}>
                        <h4>Formulário de cadastro de convites</h4>
                        <p>*Preencha o formulário para realizar um novo cadastro de convite.</p>
                        <p>*Todos campos são obrigatórios.</p>
                    </div>
                    <div style={borda}>
                        <div>
                            <span>Carregar Imagem</span>
                            <input onChange={onChangeFile} type='file' className="form-control" />
                        </div>
                        <div>
                            <span>Título</span>
                            <input type='text' onChange={e=> onChange(e)} value={form.Titulo} name="Titulo" className="form-control" />
                        </div>
                        <div>
                            <span>Valor</span>
                            <input type='text' onChange={onChange} value={form.Texto} name="Texto" className="form-control" />
                        </div>
                        <div>
                            <span>Categoria</span>
                            <select className="form-control" name="Categoria" onChange={onChange} value={form.Categoria} >
                                <option selected value={0}>TODOS</option>
                                <option value={1}>CASAMENTO</option>
                                <option value={2}>ANIVERSÁRIO</option>
                                <option value={3}>15 ANOS</option>
                                <option value={4}>CHÁ DE BEBÊ / REVELAÇÃO</option>
                            </select>
                        </div>
                        <div>
                            <span>Descrição</span>
                            <textarea onChange={onChange} value={form.Descricao} name='Descricao' className="form-control" style={{ height: '200px', resize: 'none' }} maxLength={200} />
                        </div>
                        <div style={borda}>
                            <button className="btn btn-primary" onClick={add} style={{ width: '100%' }}>Cadastrar</button>
                            <button className="btn btn-danger" onClick={() => window.history.back()} style={{ width: '100%' }}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}