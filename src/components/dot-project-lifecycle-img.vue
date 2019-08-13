<template>
    <svg
      :height="img_height"
      :width="img_width"
      viewBox="0 20 158.75 120">
      <defs
        id="defs2" />
      <metadata
        id="metadata5">
        <rdf:RDF>
          <cc:Work
            rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type
              rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title />
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g
        id="layer2"
        style="display:inline">
        <path
          class="dh-data-access-coe_project-lifecycle_image-planning-circle"
          id="planning-circle"
          sodipodi:type="arc"
          sodipodi:cx="78.377266"
          sodipodi:cy="80.594444"
          sodipodi:rx="50.662537"
          sodipodi:ry="50.662537"
          sodipodi:start="5.1842301"
          sodipodi:end="5.8241694"
          sodipodi:open="true"
          d="m 101.40476,35.467653 a 50.662537,50.662537 0 0 1 22.39091,22.679939" />
        <path
          d="M 32.726267,58.624489 A 50.662537,50.662537 0 0 1 53.832416,36.274663"
          sodipodi:open="true"
          sodipodi:end="4.2066234"
          sodipodi:start="3.5901354"
          sodipodi:ry="50.662537"
          sodipodi:rx="50.662537"
          sodipodi:cy="80.594444"
          sodipodi:cx="78.377266"
          sodipodi:type="arc"
          id="closeout-circle"
          class="dh-data-access-coe_project-lifecycle_image-closeout-circle" />
        <path
          d="m 128.5312,73.433749 a 50.662537,50.662537 0 0 1 -3.7351,27.458101"
          sodipodi:open="true"
          sodipodi:end="0.41221448"
          sodipodi:start="6.1413694"
          sodipodi:ry="50.662537"
          sodipodi:rx="50.662537"
          sodipodi:cy="80.594444"
          sodipodi:cx="78.377266"
          sodipodi:type="arc"
          id="preaward-circle"
          class="dh-data-access-coe_project-lifecycle_image-preaward-circle"/>
        <path
          class="dh-data-access-coe_project-lifecycle_image-award-circle"
          id="award-circle"
          sodipodi:type="arc"
          sodipodi:cx="78.377266"
          sodipodi:cy="80.594444"
          sodipodi:rx="50.662537"
          sodipodi:ry="50.662537"
          sodipodi:start="0.81417836"
          sodipodi:end="2.3596113"
          sodipodi:open="true"
          d="M 113.15538,117.43431 A 50.662537,50.662537 0 0 1 42.431249,116.29566" />
        <path
          d="M 32.166492,101.36117 A 50.662537,50.662537 0 0 1 28.245246,73.281904"
          sodipodi:end="3.2864368"
          sodipodi:start="2.7192449"
          sodipodi:ry="50.662537"
          sodipodi:rx="50.662537"
          sodipodi:cy="80.594444"
          sodipodi:cx="78.377266"
          sodipodi:type="arc"
          id="postward-circle"
          class="dh-data-access-coe_project-lifecycle_image-postaward-circle"
          sodipodi:open="true" />
      </g>
      <g
        id="layer1"
        transform="translate(0,-138.24998)"
        style="display:inline">
        <g
          id="planning-group"
          :class="['dh-data-access-coe_project-lifecycle_image-planning', img_active=='planning'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
          @click="this.ProjectLifecycleClick">
          <title
            id="title881">{{tooltip_planning}}</title>
          <rect
            ry="2.6422939"
            y="164.17709"
            x="53.909138"
            height="15.945891"
            width="47.945889"
            id="planning-rect"
          >
          </rect>
          <text
            transform="scale(0.93529044,1.0691866)"
            id="planning-text"
            y="163.12917"
            x="65.902061"
            class="dh-data-access-coe_project-lifecycle_text-all"
            xml:space="preserve"><tspan
              y="163.12917"
              x="68.5"
              id="planning-tspan"
              sodipodi:role="line">Planning</tspan></text>
        </g>
        <g
          id="preaward-group"
          inkscape:label="#g862"
          :class="['dh-data-access-coe_project-lifecycle_image-preaward', img_active=='preaward'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
          @click="this.ProjectLifecycleClick">
          <title
            id="title883">{{tooltip_preaward}}</title>
          <rect
            id="preaward-rect"
            width="47.945889"
            height="15.945891"
            x="104.13216"
            y="196.02704"
            ry="2.6422939" />
          <text
            xml:space="preserve"
            class="dh-data-access-coe_project-lifecycle_text-all"
            x="115.8069"
            y="193.1255"
            id="preaward-text"
            transform="scale(0.93529044,1.0691866)"
            inkscape:label="#text860"><tspan
              sodipodi:role="line"
              id="preaward-tspan"
              x="119"
              y="193.1255">Pre-Award</tspan></text>
        </g>
        <g
          id="closeout-group"
          inkscape:label="#g877"
          :class="['dh-data-access-coe_project-lifecycle_image-closeout', img_active=='closeout'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
          @click="this.ProjectLifecycleClick">
          <title
            id="title879">{{tooltip_closeout}}</title>
          <rect
            id="closeout-rect"
            width="47.945889"
            height="15.945891"
            x="6.1250119"
            y="196.02704"
            ry="2.6422939" />
          <text
            xml:space="preserve"
            class="dh-data-access-coe_project-lifecycle_text-all"
            x="14.337803"
            y="193.12549"
            id="closeout-text"
            transform="scale(0.93529044,1.0691866)"
            inkscape:label="#text866"><tspan
              sodipodi:role="line"
              id="closeout-tspan"
              x="16.5"
              y="193.12549">Closeout</tspan></text>
        </g>
        <g
          id="postaward-group"
          inkscape:label="#g872"
          :class="['dh-data-access-coe_project-lifecycle_image-postaward', img_active=='postaward'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
          @click="this.ProjectLifecycleClick">
          <title
            id="title887">{{tooltip_postaward}}</title>
          <rect
            ry="2.6422939"
            y="239.02704"
            x="16.989187"
            height="15.945891"
            width="47.945889"
            id="postaward-rect"/>
          <text
            transform="scale(0.93529044,1.0691866)"
            id="postaward-text"
            y="233.55034"
            x="21.212477"
            class="dh-data-access-coe_project-lifecycle_text-all"
            xml:space="preserve"
            inkscape:label="#text872"><tspan
              y="233.55034"
              x="24.3"
              id="postaward-tspan"
              sodipodi:role="line">Post Award</tspan></text>
        </g>
        <g
          id="award-group"
          inkscape:label="#g867"
          :class="['dh-data-access-coe_project-lifecycle_image-award', img_active=='award'?'dh-data-access-coe_project-lifecycle_stroke_active':'']"
          @click="this.ProjectLifecycleClick">
          <title
            id="title885">{{tooltip_award}}</title>
          <rect
            ry="2.6422939"
            y="239.02704"
            x="93.952415"
            height="15.945891"
            width="47.945889"
            id="award-rect"
            
            style="" />
          <text
            transform="scale(0.93529044,1.0691866)"
            id="award-text"
            y="233.34299"
            x="113.45695"
            class="dh-data-access-coe_project-lifecycle_text-all"
            xml:space="preserve"
            inkscape:label="#text878"><tspan
              y="233.34299"
              x="115"
              id="award-tspan"
              sodipodi:role="line">Award</tspan></text>

        </g>
      </g>
    </svg>
</template>
<script>

export default {
  name: 'DOTProjectLifecycleImg',
  props: ['height', 'width', 'active'],
  data: function(){
    return {
      img_height: this.heigth,
      img_width: this.width,
      img_active: this.active,
      tooltip_planning: 'The Planning phase consists of planning for a project or procurement.',
      tooltip_preaward: 'The Pre-Award phase consists of preparing for responses to procurement requests and the start of a project.',
      tooltip_award: 'The Award phase consists of the phase after the award of a procurement to a data provider and the start of the project.',
      tooltip_postaward: 'The Post-Award phase consists of the period after initial award where the project grows and starts producing data.',
      tooltip_closeout: 'The Closeout phase consists of the end of the project and ensuring data is properly retained.'
    }
  },
  methods: {
    ProjectLifecycleClick: function(event) {
      let id = event.target.id;
      switch(id){
        case 'planning-group':
        case 'planning-rect':
        case 'planning-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/planning'});
          break;
        }
        case 'preaward-group':
        case 'preaward-rect':
        case 'preaward-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/preaward'});
          break;
        }
        case 'award-group':
        case 'award-rect':
        case 'award-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/award'});
          break;
        }
        case 'postaward-group':
        case 'postaward-rect':
        case 'postaward-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/postaward'});
          break;
        }
        case 'closeout-group':
        case 'closeout-rect':
        case 'closeout-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/closeout'});
          break;
        }
        default: return;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .dh-listtype__upperalpha {
    list-style-type: upper-alpha;
    font-weight: bold;
  }
  a {
    word-wrap: break-word;
  }
</style>
