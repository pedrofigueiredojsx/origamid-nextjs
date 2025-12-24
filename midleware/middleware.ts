import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(`${request.nextUrl.pathname}`)

  const token = request.cookies.get('token')?.value
  const response = NextResponse.next()

  if (request.nextUrl.pathname.startsWith('/entrar')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (!token && request.nextUrl.pathname.startsWith('/conta')) {
    response.cookies.set('entrouConta', 'true', {
      httpOnly: true,
    })
    return NextResponse.redirect(new URL('/login', request.url))
  } else {
    return response
  }
}

export const config = {
  matcher: ['/((?!api|_next|static|public|favicon.ico).*)'],
}
