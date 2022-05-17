import styles from '../styles/Home.module.css'
import Nav from './navbar'


export default function Home() {
  return (

    <div>
      <Nav></Nav>
      <main className="container">
		  
		<div className="d-flex align-items-center p-3 my-3 text-white bg-danger rounded shadow-sm">
		  
			
		  <div className="lh-1">
			<h1 className="h6 mb-0 text-black lh-1 ">V8 RACING</h1>
			
		  </div>
		</div>

		<div className="my-3 p-3 bg-body rounded shadow-sm">
			
			<div>
				<h6 className="border-bottom pb-2 mb-0">Tópicos ativos</h6>

			</div>
			

			<div className="d-flex text-muted pt-3">
			  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
		
			  <p className="pb-3 mb-0 small lh-sm">
				<strong className="d-block text-gray-dark">Elétrica</strong>		

			  </p>

			</div>

			<div className="d-flex text-muted pt-3">
			  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
		
			  <p className="pb-3 mb-0 small lh-sm ">
				<strong className="d-block text-gray-dark">PowerTrain</strong>
			  </p>
			</div>

			<div className="d-flex text-muted pt-3">
			  <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
		
			  <p className="pb-3 mb-0 small lh-sm">
				<strong className="d-block text-gray-dark">Relatórios</strong>
			  </p>
			</div>

		  </div>
	  
		<div className="my-3 p-3 bg-body rounded shadow-sm">
		  <h6 className="border-bottom pb-2 mb-0">Atualizações recentes</h6>
		  <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
	  
			<p className="pb-3 mb-0 small lh-sm border-bottom">
			  <strong className="d-block text-gray-dark">@username</strong>
			  texto texto texto texto texto texto texto texto
			</p>
		  </div>
		  <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>
	  
			<p className="pb-3 mb-0 small lh-sm border-bottom">
			  <strong className="d-block text-gray-dark">@username</strong>
			  texto texto texto texto texto texto texto texto
			</p>
		  </div>
		  <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
	  
			<p className="pb-3 mb-0 small lh-sm border-bottom">
			  <strong className="d-block text-gray-dark">@username</strong>
			  texto texto texto texto texto texto texto texto 
			</p>
		  </div>
		  <small className="d-block text-end mt-3">
			<a href="#">All updates</a>
		  </small>
		</div>
	  
		<div className="my-3 p-3 bg-body rounded shadow-sm">
		  <h6 className="border-bottom pb-2 mb-0">Sugestões</h6>
		  <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
	
			<div className="pb-3 mb-0 small lh-sm border-bottom w-100">
			  <div className="d-flex justify-content-between">
				<strong className="text-gray-dark">Full Name</strong>
				<a href="#">Follow</a>
			  </div>
			  <span className="d-block">@username</span>
			</div>
		  </div>

		  <div className="d-flex text-muted pt-3">
			<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
	  
			<div className="pb-3 mb-0 small lh-sm border-bottom w-100">
			  <div className="d-flex justify-content-between">
				<strong className="text-gray-dark">Full Name</strong>
				<a href="#">Follow</a>
			  </div>
			  <span className="d-block">@username</span>
			</div>

		  </div>
		  <small className="d-block text-end mt-3">
			<a href="#">All suggestions</a>
		  </small>
		</div>

	  </main>
    </div>
    

  )
}
