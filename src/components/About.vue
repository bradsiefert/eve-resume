<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Eve E.<span class="text-primary">Gardner</span>
      </h1>
      <div class="subheading mb-5">
        <address class="d-inline">GRAND RAPIDS, MI</address>&nbsp;&nbsp; | &nbsp;&nbsp;(616) 307-9358 &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="mailto:GARDNER.EELIZABETH@GMAIL.COM">GARDNER.EELIZABETH@GMAIL.COM</a>
      </div>
      <p class="lead mb-5">
        Passionate and resourceful outdoor recreation professional invested in increasing accessibility to the outdoors. Highly adept in strategic planning, program development, database management, and consulting marginalized voices for input. Excellent office management skills, including communication and organization.
      </p>

      <div class="social-icons">
        <a href="https://linkedin.com/in/lokecarlsson" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://twitter.com/carlssonloke" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'twitter']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
