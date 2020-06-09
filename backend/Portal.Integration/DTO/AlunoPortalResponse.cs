namespace Portal.Integration.DTO
{
    public class AlunoPortalResponse
    {
        public int Id { get; set; }
        public string Matricula { get; set; }
        public string Nome { get; set; }
        public string ComoEhConhecido { get; set; }
        public string Email { get; set; }
        public Responsavel Mae { get; set; }
        public Responsavel Pai { get; set; }
        public Responsavel ResponsavelFinanceiro { get; set; }
        public Responsavel ResponsavelPedagogico { get; set; }
        public int AnoLetivo { get; set; }
        public int IdEscola { get; set; }
        public int IdSerie { get; set; }
        public int IdTurma { get; set; }
        public string NomeEscola { get; set; }
        public string NomeSerie { get; set; }
        public string NomeTurma { get; set; }
        public SexoEnum SexoEnum { get; set; }
        public TipoResponsavel? TipoResponsavelPedagogico { get; set; }
        public TipoResponsavel? TipoResponsavelFinanceiro { get; set; }
        public bool Ativo { get; set; }
        public string ErroValidacao { get; set; }
    }

    public class ResultadoImportacaoAluno : AlunoPortalResponse
    {
        public enum OperacaoImportacaoEnum
        {
            Criado,
            Atualizado,
            SemAlteracao,
            Erro
        }
        public OperacaoImportacaoEnum? OperacaoImportacao { get; set; }
    }

    public class Responsavel
    {
        public int Id { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public string Nome { get; set; }
    }

    public enum TipoResponsavel
    {
        Pai = 1,
        Mae = 2,
        Outro = 3
    }

    public enum SexoEnum
    {
        NaoInformado = 0,
        Masculino = 1,
        Feminino = 2
    }
}