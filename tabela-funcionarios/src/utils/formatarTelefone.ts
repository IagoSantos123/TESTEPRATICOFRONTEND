export function formatarTelefone(telefone: string): string {
    return telefone.replace(
      /(\+55)?(\d{2})(\d{5})(\d{4})/,
      "($2) $3-$4"
    );
  }
  