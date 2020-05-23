namespace Portal.Domain.DTO
{
	public class PagingParametersRequest
	{
		public int Page { get; set; } = 1;
		public int Limit { get; set; } = 3;
	}
}
