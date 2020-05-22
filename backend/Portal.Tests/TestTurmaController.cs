using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Portal.Controllers;
using Portal.Entities;
using Portal.Extension;
using Portal.Facades;
using Portal.Model;
using Portal.Models;
using Portal.Repositories.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Portal.Data.Tests
{
    public class TestTurmaController
    {
        [Fact]
        public void TestNameIsEmpty()
        {
            // Arrange
            var mockUnityOfWork = new Mock<IUnitOfWork>();
            var autoMapper = new Mock<IMapper>();

            mockUnityOfWork.Setup(uow => uow.TurmaRepository.Get())
                .Returns(() => new List<Turma>().AsQueryable());

            //autoMapper.Setup(mapper => mapper.ProjectTo<TurmaResponse>()))
            //   .Returns(() => new List<TurmaResponse>().AsQueryable());

            //var controller = new TurmaFacade(mockUnityOfWork.Object, autoMapper.Object);

            //// Assert
            //var viewResult = Assert.IsType<IActionResult>(result);
            // var model = Assert.IsAssignableFrom<PagedList<TurmaResponse>>(viewResult);
        }

        [Fact]
        public void TestNameMostThan10Characters()
        {

        }
    }
}
