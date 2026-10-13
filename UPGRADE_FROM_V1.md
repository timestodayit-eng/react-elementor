# Upgrade from Landing CMS Pro v1

1. Back up the current GitHub repository and Hostinger database.
2. Replace the repository project files with this v2 project (keep your Hostinger environment variables).
3. In phpMyAdmin select the same database and import `sql/schema-hostinger.sql`.
   - Existing `pages`, `templates`, and `settings` data is preserved because tables use `CREATE TABLE IF NOT EXISTS`.
   - New v2 tables `page_meta` and `events` will be created.
4. Confirm these environment variables still exist in Hostinger:
   - MYSQL_HOST
   - MYSQL_PORT
   - MYSQL_DATABASE
   - MYSQL_USER
   - MYSQL_PASSWORD
   - ADMIN_EMAIL
   - ADMIN_PASSWORD
   - ADMIN_SESSION_SECRET
5. Redeploy latest GitHub commit.
6. Test `/login`, `/admin`, `/admin/settings`, `/admin/analytics`, then one published `/p/slug` page.

If you prefer zero-risk migration, deploy v2 first on a new subdomain and a copied database, then switch production after testing.
