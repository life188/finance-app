ALTER TABLE "account" ADD COLUMN "plaid_id" text;--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN IF EXISTS "plaid_i";