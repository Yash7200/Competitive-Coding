#include <stdio.h>
int main()
{
    int n;
    while(1)
    {
        scanf("%d",&n);
        if(n==0)
        {
            break;
        }
        int a[n],b[n],cnt=0;
        for(int i=1;i<=n;i++)
        {
            scanf("%d",&a[i]);
            b[a[i]]=i;
        }
        for(int i=1;i<=n;i++)
        {
            if(a[i]==b[i])
            {
                cnt++;
            }
        }
        if(cnt==n)
        {
            printf("ambiguous\n");
        }
        else
        {
            printf("not ambiguous\n");
        }
    }
    return 0;
}
