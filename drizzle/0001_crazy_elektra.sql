ALTER TABLE "account" ADD COLUMN "plaid_i" text;--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN IF EXISTS "plaid_id";