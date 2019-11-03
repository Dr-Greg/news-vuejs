<template>
  <section class="section">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-spaced">Welcome back !</h1>
        <h2 class="subtitle">Happy to see you :)</h2>
      </div>
    </div>
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-5 is-4-desktop">
          <form>
            <div class="field">
              <div class="control">
                <input class="input" type="email" placeholder="Email" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="password" placeholder="Password" />
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <button class="button is-primary is-fullwidth">Log in</button>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <b-navbar-item
                  tag="router-link"
                  :to="{ path: '/register' }"
                  class="button is-light"
                >Sign up</b-navbar-item>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
