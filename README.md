## DOCKER CONTAINER NAME:

- gostack_postgress

# Recuperação de senha

**RF (Recursos Funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF (Recursos Não Funcionais)**

- Utilizar Mailtrap para testar envios em abiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regras de Negócio)**

- O link eviado por e-mail para resetar senha, deve exprirar em 2h;
- O usuário precisa confirmar a nova senha, ao resetar sua senha;

# Atualização do perfil

# Painel do prestador

# Agendamento de serviços
