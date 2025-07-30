export type CreateSnippetFormState = {
  success: boolean;
  message: string;
  // 用于存放具体字段的错误信息，例如 { email: '邮箱格式不正确' }
  errors?: Record<string, string> | null;
};
