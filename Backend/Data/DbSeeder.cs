using Microsoft.AspNetCore.Identity;

namespace Portfolio.Backend.Data
{
    public static class DbSeeder
    {
        public static async Task SeedAdminUserAsync(IServiceProvider serviceProvider)
        {
            var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            // Create Admin role if it doesn't exist
            if (!await roleManager.RoleExistsAsync("Administrator"))
            {
                await roleManager.CreateAsync(new IdentityRole("Administrator"));
            }

            // Create default admin user
            var defaultAdmin = new IdentityUser
            {
                UserName = "admin",
                Email = "admin@portfolio.local",
                EmailConfirmed = true
            };

            var user = await userManager.FindByNameAsync(defaultAdmin.UserName);
            if (user == null)
            {
                var createPowerUser = await userManager.CreateAsync(defaultAdmin, "Admin123!");
                if (createPowerUser.Succeeded)
                {
                    await userManager.AddToRoleAsync(defaultAdmin, "Administrator");
                }
            }
        }
    }
}
