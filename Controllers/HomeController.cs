﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Zoltu.Bags.Client.Controllers
{
	public class HomeController : Controller
	{
		[Route("", Name ="Home", Order = 0)]
		[Route("app", Name = "app", Order = 0)]
		public IActionResult App()
		{
			ViewData["url"] = "https://bagcupid.com/";
			ViewData["type"] = "website";
			ViewData["title"] = "Bag Cupid";
			ViewData["description"] = "What is your dream bag? Are you having trouble finding it? Let us help you!";

			return View("Index");
		}

		[Route("app/product/{productId}", Name = "product", Order = 0)]
		public IActionResult Product(int productId)
		{
			ViewData["url"] = "Muhammad Nabeel";
			ViewData["type"] = "Managing Director";
			ViewData["title"] = "Principal Software Engineer / Technical Lead";
			ViewData["description"] = "Relliks Systems";

			return View("Index");
		}
	}
}
