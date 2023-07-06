import { cookies } from 'next/headers'

const LoginPage = (wokirId) => {
  const [password, setPassword] = '';


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      
      if (password === 'sua_senha_padrao') {
        const response = await fetch('/api/login/', {
        method: "POST",
         cache: 'no-cache',
          password: password,
        });

        cookies().set('jwt', response.data.token)

        // Redireciona para a página de postagens protegidas
        // ou executa a lógica necessária para renderizar as postagens protegidas
        // Exemplo: router.push('/posts')
        redirect('/works/'+wokirId)

      } else {
        // Senha incorreta
        console.log('Senha incorreta');
        redirect('/login')

      }
    } catch (error) {
      // Erro ao fazer a solicitação
      console.error('Erro ao fazer a solicitação:', error);
      redirect('/works?selected=all')

    }
  };

  return (
    <div className='flex flex-col m-auto max-w-lg p-20 text-red font-semibold '>
      <p>Esse conteúdo é protegido por questões de confidencialidade do cliente. Para visualizar é preciso autorização. Caso queira solicitaruma autorização envie email para <strong> hi@pgv.service.</strong></p>
      <form className='flex justify-center mt-20' method="POST" action="/api/login/" >
        <input className='border rounded-md border-gray mr-2 p-2	'
          type="password"
          value={password}
          placeholder='Insira a senha'
        />
        <button className='border rounded-md border-gray  p-2 text-darkgray' type="submit">Acessar</button>
      </form>
    </div>
  );
};

export default LoginPage;