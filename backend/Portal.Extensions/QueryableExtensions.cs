using Microsoft.EntityFrameworkCore;
using Portal.Domain.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portal.Extensions
{
    public static class QueryableExtensions
    {
        public static async Task<PagedListResponse<T>> ToPagedListAsync<T>(this IQueryable<T> query, int page, int pageSize)
        {
            var count = query.Count();
            var items = await query.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync();

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
