// n --> students living in dormitory
// all want to use kitchen

// 1st student uses kitchen at time 0 & must not finish after A1
// time allotted for specific student = entering time - exit time of previous student

// a[n] --> entering time of each student
// b[n] --> required time of each student

// prev --> entering time of previous student
// cnt --> no. of students able to finish cooking

// we will compare required time with allotted time
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    int a[n],b[n],cnt=0,prev=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	    }
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&b[j]);
	        if(b[j]<=(a[j]-prev))
	        {
	            cnt++;
	        }
	        prev=a[j];
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}