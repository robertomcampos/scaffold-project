using Portal.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Portal.Extensions
{
    public static class EnumerableExtensions
    {
        public static PagedListResponse<T> ToPagedListAsync<T>(this IEnumerable<T> query, int page, int pageSize)
        {
            var count = query.Count();
            var items = query.Skip((page - 1) * pageSize).Take(pageSize);

            return new PagedListResponse<T>
            {
                CurrentPage = page,
                PageSize = pageSize,
                TotalCount = count,
                TotalPages = (int)Math.Ceiling(count / (double)pageSize),
                Items = items
            };
        }
    }
}
