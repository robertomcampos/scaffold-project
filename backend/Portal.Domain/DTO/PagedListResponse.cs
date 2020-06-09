using System;
using System.Collections.Generic;
using System.Text;

namespace Portal.Domain.DTO
{
    public class PagedListResponse<T>
    {
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}
